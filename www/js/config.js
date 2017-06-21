angular.module('WordApp.config', [])

// Replace with your Wordpress Blog WP REST API url ex.: myblog.com required '/wp-json/wp/v2/' at the end
.constant('WORDPRESS_API_URL', 'http://elphinstone.collegelive.in/wp-json/wp/v2/')

// Replace with your Google Project Number https://documentation.onesignal.com/docs/generate-a-google-server-api-key
.constant('GOOGLE_PROJECT_NUMBER', '846359546996')

// Replace with your OneSignal AppId https://documentation.onesignal.com/docs/accounts-and-keys#section-keys-ids
.constant('ONESIGNAL_APP_ID', '6816e351-487d-4507-ac4c-a512479f1bdf')

// Change color your Ionic application to light, stable, positive, calm, balanced, energized, assertive, royal or dark 
.constant('IONIC_APP_COLOR', 'dark')

// Change Posts page template to cards, cards2, list, mixed
.constant('POSTS_TEMPLATE', 'list')

// Replace with your Android package name and IOS app ID
.constant('ANDROID_PACKAGE_NAME', 'me.classinfo.collegelive')
.constant('IOS_APP_ID', '<my_app_id>')

// Replace with your Primary Email to send Feedback
.constant('PRIMARY_EMAIL', 'govindrathod86@gmail.com')

// Replace with email to send copy Feedback or leave empty
.constant('COPY_EMAIL', 'infobanjara@gmail.com')

// Replace with phone number for send SMS
.constant('SMS_PHONE_NUMBER', '9833311883');
