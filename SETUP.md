# Siddhivinayak Enterprise: online app setup (Hinglish)

Is folder me poora app ready hai. Aapko sirf 3 kaam karne hain: Firebase banao, hosting par daalo, phir Play Store par chadhao.
Sab kuch free hai (Play Store ki ek baar ki fees ko chhodkar).

## Step 1: Firebase project (free)
1. https://console.firebase.google.com par Google account se login karo.
2. **Add project** dabao, naam do (jaise `siddhivinayak`). Google Analytics band rakh sakte ho.
3. Left menu: **Build > Authentication > Get started > Sign-in method > Email/Password** ko Enable karo.
4. **Build > Firestore Database > Create database**. Location: `asia-south1 (Mumbai)`. Production mode chuno.
5. Firestore ke **Rules** tab me jao. Jo likha hai wo sab hata kar is folder ki `firestore.rules` file ka poora text paste karo, phir **Publish**.

## Step 2: Config paste karo
1. Firebase me **Project settings (gear icon) > General > Your apps > Web (</>)**. Naam do, **Register app**.
2. Jo `firebaseConfig` dikhe usko copy karo.
3. `firebase-config.js` kholo aur `YOUR_...` wali values apni values se badal do. Save karo.

## Step 3: Hosting (free)
Sabse aasan: **Netlify Drop**
1. https://app.netlify.com/drop kholo (free account banao).
2. Pura folder (`siddhivinayak-app`) drag karke daal do. Aapko `https://kuch-naam.netlify.app` jaisa link milega.
3. Firebase me **Authentication > Settings > Authorized domains > Add domain** me ye link (bina https://) add karo.

(Dusre free options: Cloudflare Pages, GitHub Pages, Firebase Hosting.)

## Step 4: Test karo
1. Link kholo, **Naya business? Account banao** dabao. Email, password aur ek **business code** (jaise `siddhi01`) daalo.
2. **Workers** tab me naya worker add karo: naam, Login ID, daily wage aur PIN (kam se kam 6 characters).
3. Dusre phone par link kholo, **Worker login** me business code, Login ID aur PIN daalo. Worker ko sirf apna hisaab dikhega.
4. Phone me "Add to Home Screen" karo, app jaisa chalega.

Purane offline app ka data lana ho to purane app me **Download backup** karo, naye app me **Workers tab > Restore from backup file** se daalo. Purane workers ke liye "Login+" se naya Login ID aur PIN bana do.

## Step 5: Play Store ke liye Android app banao (free)
1. https://www.pwabuilder.com par apna Netlify link daalo, **Start**.
2. **Package for stores > Android > Google Play** chuno. Package ID jaise `com.siddhivinayak.enterprise` rakho.
3. Download me ek `.aab` file, **signing key** aur `assetlinks.json` milegi. **Signing key aur uska password kahin safe rakho**, kho diya to app update nahi kar paoge.
4. `assetlinks.json` ko is folder me `.well-known/assetlinks.json` naam se rakho aur folder dobara Netlify Drop par daal do. (Isse app me upar ka browser bar nahi dikhega.)

## Step 6: Google Play Console
1. https://play.google.com/console par developer account banao (ek baar ki fees lagti hai, lagbhag $25).
2. **Create app**. Naya personal account hai to pehle **Closed testing** me `.aab` upload karo, kam se kam **12 testers ko 14 din lagatar** opt-in rakho. Uske baad **Production access** ke liye apply karo.
3. Store listing me chahiye: app ka naam, short aur full description, 512x512 icon (`icons/icon-512.png`), 1024x500 feature graphic, kam se kam 2 phone screenshots.
4. **Privacy policy URL** me `https://AAPKA-LINK/privacy.html` daalo.
5. **Data safety** form me batao: email aur user ka business data (attendance, salary) collect hota hai, internet par encrypted bhejta hai, aur delete request ka tareeka (email) hai.
6. Content rating aur target audience (18+) bharo, phir review ke liye bhejo.

## Kuch zaroori baatein
- Worker ka PIN badalna ho to owner **Workers tab** me PIN box badal sakta hai.
- Worker ko hatane par wo login nahi kar paata, par uska purana record owner ke paas safe rehta hai.
- Owner ka password bhool jaye to login screen par **Password bhool gaye?** dabaye, email par link aayega.
- Firebase free plan chhote business ke liye kaafi hai.
