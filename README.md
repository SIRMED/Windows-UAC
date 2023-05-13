# Windows Password
A phishing page to get the Windows 10 user password

# Get Started
### Set Up
Open `page.html` and edit the user name and profile pictures according to your needs.

### Start the page
Make sure only chrome (or your favorite browser) is open and no other app is open. Open `start.html` and press the start button. A new windows will open, you will have a 5 second limit until it starts propagation. In the 5 second timer, close the `start.html` page and enter fullscreen by useing the options (3 dots on the nav bar). Wait until an alert apears which says `Collatrel Started`. No wait for someone to enter the password. When entered, the windows will close after 2 seconds taking you to the desktop.

### Check entered passwords
Now open `page.html` and enter the console. Type the function `printPasswords()`. A list of entered passwords will be shown with the time they were entered in. You can also check the passwords via the `Application` tab in developer tools and going to `local storage`.

# Failsafe mesaures
The application is filled with diffrent functions to prevent you from getting caught.

### User change
Currently the app doesnt support chaning users. Only the `Jhon Doe` user is available. If someone still tries to change the user, a loading screen will appear and after 8 seconds a black screen. 1.5 seconds after the black screen, a blue screen of death will appear which will say `You PC ran into a problem....`. The % done will stop a 99% and wont go any further, nothing will happen beyond this point. This is for to make the user shut down the PC directly from the switch, saving you from getting caught.

### Shut down
The same thing will happen as said above

### Fullscreen exit
If some how the person exits fullscreen, the application will close and take you to the desktop. As no other "phising" stuff will work as it is not in full screen.
