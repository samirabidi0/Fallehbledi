const puppeteer = require('puppeteer')
module.exports = {
    pricesData:  async (req, res) => {
        try {
            // Launch Puppeteer browser
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            
            await page.goto('http://sotumag.com.tn/test_sotumag/site/htdocs/inde.php');
      
            // Wait for the element that contains the data to be rendered
            await page.waitForSelector('.col-md-11'); // Modify the selector as needed
      
            // Extract the data
            const data = await page.evaluate(() => {
                const element = document.querySelector('.col-md-11'); // Modify the selector as needed
                return element ? element.innerText : null;
            });
           await browser.close();
           const lines = data.trim().split('\n\n').filter(line => line.trim() !== '');
           const items = [];
           
           for (const line of lines) {
            // Extract price and title
            const parts = line.split('\t').map(part => part.trim()).filter(part => part !== '');
            if (parts.length >= 2) {
                const price = parseInt(parts[0], 10);
                const title = parts.slice(1).join('\t');
                // Add item to the array
                items.push({
                    title: title,
                    price: price
                });
            }
        }
      
            // Send the data as response
            res.json({items});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
      }
}
 