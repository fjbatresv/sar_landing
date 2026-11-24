import { mkdir, rm, readFile, stat } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';

const here = path.dirname(fileURLToPath(import.meta.url));
const output = path.resolve(here, '../../public/assets/screens');
const base = process.env.SCREENSHOT_BASE_URL ?? 'http://127.0.0.1:4200';
const screens = [
  ['dashboard', '/home'],
  ['daily-inventory', '/inventory/inventory-closures'],
  ['daily-close', '/sales/closure'],
  ['projections', '/reports/sales-projection'],
  ['sales', '/sales/point-of-sale/consolidated'],
  ['employees', '/employees'],
];
const languages = await readFile(path.join(here, 'fixtures/languages.json'), 'utf8');
const permissions = ['HOME', 'DAILY_INVENTORY_VIEW', 'GENERAL_INVENTORY_VIEW', 'SALES_CLOSURE_VIEW', 'SALES_PROJECTIONS_VIEW', 'CONSOLIDATED_VIEW', 'FISCAL_DOCUMENTS_VIEW', 'EMPLOYEE_VIEW'];
const session = {
  authToken: 'fictional-session-token', refreshToken: 'fictional-refresh-token', permissions: JSON.stringify(permissions),
  username: 'Demo User', firstName: 'Demo', lastName: 'User', role: 'Store manager',
  userLocations: [], userCompanies: [{ companyId: 1, companyName: 'Sample Group' }],
  currentCompanyStores: [{ storeId: 101, storeName: 'Sample Store', storeCode: 101, storeTimezone: 0 }],
  lastCompany: { companyId: 1, companyNumericCode: 101, companyName: 'Sample Group' },
  lastStore: { storeId: 101, storeName: 'Sample Store', storeCode: 101, storeTimezone: 0 },
};

await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
try {
  for (const [name, routePath] of screens) {
    for (const [label, width, height] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
      const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1, colorScheme: 'light', reducedMotion: 'reduce' });
      await context.addInitScript((data) => localStorage.setItem('appData', JSON.stringify(data)), session);
      const page = await context.newPage();
      await page.route('https://api.demo.invalid/**', async (route) => {
        const url = new URL(route.request().url());
        return route.fulfill({ status: 200, contentType: 'application/json', body: url.pathname.endsWith('/translations') ? languages : '[]' });
      });
      await page.goto(new URL(routePath, base).href, { waitUntil: 'networkidle', timeout: 60000 });
      await page.evaluate(() => document.fonts.ready);
      await page.addStyleTag({ content: 'sarbo-main-nav-bar img[alt="Logo"]{visibility:hidden}' });
      await page.waitForTimeout(1200);
      const temporary = path.join(os.tmpdir(), `sar-${name}-${label}.png`);
      await page.screenshot({ path: temporary, animations: 'disabled' });
      let quality = 82;
      const target = path.join(output, `${name}-${label}.webp`);
      do {
        await sharp(temporary).webp({ quality, effort: 6 }).toFile(target);
        quality -= 8;
      } while ((await stat(target)).size > 150 * 1024 && quality >= 42);
      await rm(temporary, { force: true });
      const { width: outWidth, height: outHeight } = await sharp(target).metadata();
      const { size } = await stat(target);
      if (size > 150 * 1024) throw new Error(`${target} exceeds 150 KB`);
      console.log(`${name}-${label}: ${outWidth}x${outHeight}, ${size} bytes`);
      await context.close();
    }
  }
} finally {
  await browser.close();
}
