import puppeteer from 'puppeteer';

(async () => {
    console.log("Launching browser...");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Set standard Open Graph image dimension (1200x630)
    await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
    
    console.log("Navigating to https://spss-africa.web.app/");
    // Wait until network is idle to ensure all animations and images load
    await page.goto("https://spss-africa.web.app/", { waitUntil: "networkidle0" });
    
    // Wait an extra 3 seconds for animations
    await new Promise(r => setTimeout(r, 3000));
    
    console.log("Taking screenshot...");
    await page.screenshot({ path: "public/preview.png" });
    
    await browser.close();
    console.log("Done! Screenshot saved to public/preview.png.");
})();
