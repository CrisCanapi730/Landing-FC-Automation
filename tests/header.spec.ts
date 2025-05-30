import { test, expect } from '@playwright/test';

test('Validar todas las pestañas del header', async ({ page }) => {

    await page.goto('https://www.fitnessclubpass.com/');

    await expect(page).toHaveTitle(/Fitness Club Pass/);
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('link', {name: 'Membresias'}).click();
    await page.waitForLoadState('domcontentloaded');

    await expect(page).toHaveTitle(/Membresías/);

    await page.getByRole('link', { name: 'Para empresas' }).click();
    await page.waitForLoadState('domcontentloaded');

    await expect(page).toHaveTitle(/Corporativo/);
    await expect(page.locator('h2', { hasText: 'POTENCIA LA PRODUCTIVIDAD EN TU EMPRESA' })).toBeVisible();

    await page.getByRole('link', {name: 'Hazte Partner'}).click();
    await page.waitForLoadState('domcontentloaded');
    
    await expect(page.locator('h1', {hasText: 'DALE UN IMPULSO A TU CENTRO' })).toBeVisible();
    await expect(page).toHaveTitle(/Partners/);

    await page.getByRole('link', {name: 'Centros FC'}).click();
    // await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveTitle(/Centros/);
    await expect(page.locator('h1', {hasText: 'DESCUBRE NUESTROS CENTROS'})).toBeVisible();

    await page.getByAltText('Logo').click();
    await expect(page).toHaveTitle(/Fitness Club/);
});