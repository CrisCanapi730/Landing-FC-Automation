import { test, expect } from '@playwright/test';

test('Validar boton hablar con el encargado 1', async ({ page, context }) => {

    await page.goto('https://www.fitnessclubpass.com/partners');

    await expect(page).toHaveTitle(/Partners/);

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
    page.getByRole('link', { name: 'Hablar con el encargado' }).nth(0).click()
    ]);

    await expect(newPage).toHaveURL(
    'https://api.whatsapp.com/send/?phone=59176672664&text=Necesito+m%C3%A1s+informaci%C3%B3n+de+Fitness+Club&type=phone_number&app_absent=0'
    );
    await expect(newPage).toHaveTitle(/WhatsApp/);
});

test('Validar boton hablar con el encargado 2', async ({ page, context }) => {
    await page.goto('https://www.fitnessclubpass.com/partners');
    await expect(page).toHaveTitle(/Partners/);

    const button = page.locator('a', { hasText: 'Hablar con un encargado' }).first();
    await expect(button).toBeVisible();

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        button.click()
    ]);

    await expect(newPage).toHaveURL(
        'https://api.whatsapp.com/send/?phone=59176672664&text=Me+interesa+saber+mas+sobre+FitnessClub+como+partner&type=phone_number&app_absent=0'
    );
    await expect(newPage).toHaveTitle(/WhatsApp/);
});


test('Validar boton WhatsApp en preguntas frecuentes', async ({ page, context }) => {

    await page.goto('https://www.fitnessclubpass.com/partners');

    await expect(page).toHaveTitle(/Partners/);

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
    page.getByRole('link', { name: 'Wa logo WhatsApp' }).click()
    ]);

    await expect(newPage).toHaveURL(
    'https://api.whatsapp.com/send?phone=76672664&text=Hola%20tengo%20una%20pregunta'
    );
    await expect(newPage).toHaveTitle(/WhatsApp/);
});