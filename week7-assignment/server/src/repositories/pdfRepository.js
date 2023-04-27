import puppeteer from "puppeteer";

async function printPDF(postId) {
  try {
    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();
    await page.goto(`http://localhost:3000/post/${postId}`, {
      waitUntil: "networkidle2",
    });
    const pdf = await page.pdf({
      path: `./src/posts/post_${postId}.pdf`,
      format: "A4",
    });
    console.log("done");
    await browser.close();
    return pdf;
  } catch (error) {
    console.log("error", error);
  }
}

export default { printPDF };
