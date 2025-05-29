import { test, expect } from '@playwright/test';

test('Validar boton Quiero una cotizacion 1', async ({ page, context }) => {

    await page.goto('https://www.fitnessclubpass.com/corporativo');

    await expect(page).toHaveTitle(/Corporativo/);

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
    page.getByRole('link', { name: 'Quiero una cotización' }).nth(0).click()
    ]);

    await expect(newPage).toHaveURL(
    'https://api.whatsapp.com/send/?phone=59172203591&text=Me+interesa+saber+mas+sobre+FitnessClub+para+mi+empresa&type=phone_number&app_absent=0'
    );
    await expect(newPage).toHaveTitle(/WhatsApp/);
});

test('Validar boton nuestros centros 1', async ({ page }) => {

    await page.goto('https://www.fitnessclubpass.com/corporativo');

    await expect(page).toHaveTitle(/Corporativo/);

    await page.getByRole('link', { name: 'Nuestros centros' }).click();
    await expect(page).toHaveURL('https://www.fitnessclubpass.com/centros');
    await expect(page.getByRole('heading', { name: 'Nuestros centros' })).toBeVisible();
    await expect(page).toHaveTitle(/Centros/)
});

test('Validar boton Quiero una cotizacion 2', async ({ page, context }) => {

    await page.goto('https://www.fitnessclubpass.com/corporativo');

    await expect(page).toHaveTitle(/Corporativo/);

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
    page.getByRole('link', { name: 'Quiero una cotización' }).nth(1).click()
    ]);

    await expect(newPage).toHaveURL(
    'https://api.whatsapp.com/send/?phone=59172203591&text=Me+interesa+saber+mas+sobre+FitnessClub+para+mi+empresa&type=phone_number&app_absent=0'
    );
    await expect(newPage).toHaveTitle(/WhatsApp/);
});

test('Validar boton WhatsApp en preguntas frecuentes', async ({ page, context }) => {

    await page.goto('https://www.fitnessclubpass.com/corporativo');

    await expect(page).toHaveTitle(/Corporativo/);

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
    page.getByRole('link', { name: 'Wa logo WhatsApp' }).click()
    ]);

    await expect(newPage).toHaveURL(
    'https://api.whatsapp.com/send?phone=76672664&text=Hola%20tengo%20una%20pregunta'
    );
    await expect(newPage).toHaveTitle(/WhatsApp/);
});