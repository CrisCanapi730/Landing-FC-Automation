import { test, expect } from '@playwright/test';

test('Validar boton instagram footer', async ({ page, context }) => {

    await page.goto('https://www.fitnessclubpass.com/');

    await expect(page).toHaveTitle(/Fitness Club Pass/);

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
    page.getByRole('link', { name: 'Instagram' }).click()
    ]);

    await newPage.waitForLoadState(); 
    await expect(newPage).toHaveURL('https://www.instagram.com/fitnessclubpass/');
    await expect(newPage).toHaveTitle(/Fitness Club/);
});

test('Validar boton facebook footer', async ({ page, context }) => {

    await page.goto('https://www.fitnessclubpass.com/');

    await expect(page).toHaveTitle(/Fitness Club Pass/);

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
    page.getByAltText('Facebook').click()
    ]);

    await newPage.waitForLoadState(); 
    await expect(newPage).toHaveURL('https://www.facebook.com/people/Fitness-Club/61553905898523/');
    await expect(newPage.locator('h1')).toContainText('Fitness Club');
    await expect(newPage).toHaveTitle(/Fitness Club/);
});

test('Validar boton WhatsApp footer', async ({ page, context }) => {

    await page.goto('https://www.fitnessclubpass.com/');

    await expect(page).toHaveTitle(/Fitness Club Pass/);

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
    page.getByRole('heading', { name: 'Contáctanos' }).click()
    ]);

    await expect(newPage).toHaveURL('https://api.whatsapp.com/send/?phone=59176672664&text&type=phone_number&app_absent=0');
    await expect(newPage).toHaveTitle(/WhatsApp/);
});

// test('Validar boton TikTok footer', async ({ page, context }) => {

//     await page.goto('https://www.fitnessclubpass.com/');

//     await expect(page).toHaveTitle(/Fitness Club Pass/);

//     const [newPage] = await Promise.all([
//         context.waitForEvent('page'),
//     page.getByRole('link', { name: 'Instagram' }).click()
//     ]);

//      await newPage.waitForLoadState(); 
//     await expect(newPage).toHaveURL('https://www.instagram.com/fitnessclubpass/');
//     await expect(newPage.getByRole('heading', { name: 'fitnessclubpass' })).toBeVisible();
//     await expect(newPage).toHaveTitle(/Fitness Club/);
// });