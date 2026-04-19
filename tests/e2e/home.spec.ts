import { expect, test } from '@playwright/test';

test('homepage renders title and hero', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Phann Chanthariroza/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Building thoughtful digital products'
  );
});
