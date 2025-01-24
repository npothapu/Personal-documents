const { test } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

test('Extract and visit links', async ({ browser }) => {
  // Increase the default test timeout
  test.setTimeout(120000); // Set timeout to 2 minutes

  // Create a new page
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the website
  const url = 'https://www.ford.com';
  await page.goto(url);

  // Extract all href attributes from anchor tags, keep only unique URLs, and split into batches of 25
  const links = await page.$$eval('a', (anchors, url) => {
    const uniqueLinks = Array.from(
      new Set(anchors.map(anchor => anchor.href).filter(href => href.startsWith(url)))
    );
    return uniqueLinks;
  }, url);

  console.log('Extracted Links:', links);
  console.log('Total number of distinct hyperlinks:', links.length);

  // Split links into batches of 25
  const batches = [];
  for (let i = 0; i < links.length; i += 25) {
    batches.push(links.slice(i, i + 25));
  }

  console.log('Batches of Links:', batches);

  // Save batches into the 'ford' folder
  const folderPath = path.resolve(__dirname, '../data/url_batches/ford');
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // Save each batch as a JSON file
  batches.forEach((batch, index) => {
    const filePath = path.join(folderPath, `batch_${index + 1}.json`);
    fs.writeFileSync(filePath, JSON.stringify(batch, null, 2), 'utf-8');
    console.log(`Batch ${index + 1} saved to ${filePath}`);
  });

  // Optional: Visit each link dynamically (commented out for clarity)
  // for (const link of links) {
  //   try {
  //     console.log(`Navigating to: ${link}`);
  //     await page.goto(link);
  //     const pageTitle = await page.title();
  //     console.log(`Title of ${link}: ${pageTitle}`);
  //   } catch (error) {
  //     console.error(`Failed to navigate to ${link}:`, error.message);
  //   }
  // }
});
