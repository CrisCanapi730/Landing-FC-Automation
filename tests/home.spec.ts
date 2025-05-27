import { test, expect } from '@playwright/test';
import { get } from 'http';

test('Validar boton nuestros centros 1', async ({ page }) => {

    await page.goto('https://www.fitnessclubpass.com/');

    await expect(page).toHaveTitle(/Fitness Club Pass/);

    await page.getByRole('button', { name: 'Nuestros centros' }).click();
    await expect(page).toHaveURL('https://www.fitnessclubpass.com/centros');
    await expect(page.getByRole('heading', { name: 'Nuestros centros' })).toBeVisible();
    await expect(page).toHaveTitle(/Centros/)
});

test('Validar boton nuestros centros 2', async ({ page }) => {

    await page.goto('https://www.fitnessclubpass.com/');

    await expect(page).toHaveTitle(/Fitness Club Pass/);

    await page.locator('body > main > section.styles_mapContainer__dGYTN > div > a > div').click();
    await expect(page).toHaveURL('https://www.fitnessclubpass.com/centros');
    await expect(page.getByRole('heading', { name: 'Nuestros centros' })).toBeVisible();
    await expect(page).toHaveTitle(/Centros/)
});

test('Validar boton ver membresias 1', async ({ page }) => {

    await page.goto('https://www.fitnessclubpass.com/');

    await expect(page).toHaveTitle(/Fitness Club Pass/);

    await page.getByRole('link', { name: 'Ver membresías' }).nth(0).click();
    await expect(page).toHaveURL('https://www.fitnessclubpass.com/membresias');
    await expect(page).toHaveTitle(/Membresías/);
});

test('Validar boton ver membresias 2', async ({ page }) => {

    await page.goto('https://www.fitnessclubpass.com/');

    await expect(page).toHaveTitle(/Fitness Club Pass/);

    await page.getByRole('link', { name: 'Ver membresías' }).nth(1).click();
    await expect(page).toHaveURL('https://www.fitnessclubpass.com/membresias');
    await expect(page).toHaveTitle(/Membresías/);
});

test('Validar boton hazte partner', async ({ page }) => {
    await page.goto('https://www.fitnessclubpass.com/');
    await expect(page).toHaveTitle(/Fitness Club Pass/);

    await page.getByRole('button', { name: 'Hazte partner' }).click();
    await expect(page).toHaveURL('https://www.fitnessclubpass.com/partners');
    await expect(page.getByRole('heading', { name: 'CENTRO' })).toBeVisible();
    await expect(page).toHaveTitle(/Partners/);
});


