import { test, expect } from '@playwright/test';

test('Validar mostrar todas las fotos', async ({ page }) => {
  await page.goto('https://www.fitnessclubpass.com/centros');
  await page.getByRole('button', { name: 'Aqualatina Natacion Avenida' }).click();
  await page.getByRole('button', { name: 'placeholder Mostrar todas las' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('link', { name: 'placeholder Volver a centros' }).click();
  await expect(page.getByRole('heading', { name: 'Descubre nuestros centros' })).toBeVisible();
});

test('Validar entrar a un centro', async ({ page }) => {
  await page.goto('https://www.fitnessclubpass.com/centros');
  await page.getByRole('button', { name: 'PEP Running Box Crossfit  ·' }).click();
  await page.getByRole('heading', { name: 'PEP Running Box' }).click();
  await expect(page.getByRole('heading', { name: 'PEP Running Box' })).toBeVisible();
});


// test('Validar boton Quiero una cotizacion 1', async ({ page, context }) => {

//     await page.goto('https://www.fitnessclubpass.com/corporativo');

//     await expect(page).toHaveTitle(/Corporativo/);

//     const [newPage] = await Promise.all([
//         context.waitForEvent('page'),
//     page.getByRole('link', { name: 'Quiero una cotización' }).nth(0).click()
//     ]);

//     await expect(newPage).toHaveURL(
//     'https://api.whatsapp.com/send/?phone=59172203591&text=Me+interesa+saber+mas+sobre+FitnessClub+para+mi+empresa&type=phone_number&app_absent=0'
//     );
//     await expect(newPage).toHaveTitle(/WhatsApp/);
// });

