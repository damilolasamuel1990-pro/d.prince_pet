=====================================================
   D.PRINCE PET NG WEBSITE - HOW TO EDIT
=====================================================

FOLDER STRUCTURE
----------------
dprince-pet-ng/
  index.html        -> All text & content of the website
  css/style.css     -> Colors, fonts and design
  js/script.js      -> WhatsApp number & website features
  images/           -> All pictures (hero.jpg, dogs.jpg, cats.jpg, accessories.jpg)
  README.txt        -> This guide

HOW TO VIEW THE WEBSITE
-----------------------
Double-click "index.html" and it will open in your browser.
No installation is needed.

HOW TO EDIT (use Notepad, Notepad++, VS Code, or any text editor)
-------------------------------------------------------------------
1. WHATSAPP NUMBER
   Open js/script.js and change:
       const WHATSAPP_NUMBER = "2348000000000";
   Write your number in international format without "+".
   Example: 08012345678  ->  2348012345678

2. TEXT, PHONE, EMAIL, ADDRESS, PRICES
   Open index.html. Search for the word "EDIT" (Ctrl + F)
   to find every part you can change.

3. PRODUCTS / PETS
   In index.html find the "SHOP SECTION".
   Each product starts with <div class="product-card" ...>
   - To add one: copy a whole product-card block and paste it below.
   - To delete one: remove the whole block.
   - data-category must be: dogs, cats or accessories

4. PICTURES
   Put your own pictures in the "images" folder.
   Easiest way: use the SAME file names (hero.jpg, dogs.jpg ...)
   Or change the src="images/yourphoto.jpg" in index.html.

5. COLORS
   Open css/style.css. At the top you will see:
       --primary: #f97316;   (orange)
       --secondary: #0f766e; (teal)
   Replace them with any color code (search "color picker" on Google).

6. SOCIAL MEDIA
   In index.html find "socials" in the footer and replace "#"
   with your Instagram / Facebook / TikTok links.

PUBLISHING ONLINE (FREE)
------------------------
Drag and drop this whole folder on https://app.netlify.com/drop
or upload it to GitHub Pages. Your site will be live in minutes.
