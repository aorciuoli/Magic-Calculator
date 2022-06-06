
#MAGIC CALCULATOR
---------------------------------------------------------------------

Anthony Orciuoli

6-3-2022

---------------------------------------------------------------------

WHAT DOES IT DO?
 
This is a magic calculator web application that will allow you to 
predict a seemingly randomly generated number.

In the process, you can also gain information regarding the spectator's 
birthday, age, and their Astrological and Chinese Zodiac signs.

---------------------------------------------------------------------

SOURCES

- Calculator: https://www.youtube.com/watch?v=j59qQ7YWLxw&t=1294s
- Calculator/Other Interface Stuff: https://www.youtube.com/watch?v=h6UPzVj1ncI
- Side Menu*: https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp
- Misc Issues and Questions: Various 'Geeks 4 Geeks' and 'W3 Schools' pages

All of the magic trick functionality was designed by me. I only used tutorials for the basic calculator 
and opening side menu aspects of this project

---------------------------------------------------------------------

CHALLENGES*

A minor challenge at first was getting the force number to display on the calculator but that was quickly resovled.

My biggest challenge was being able to take in the first three inputs and store them as a person's birth
month, day, and year. I ended up using a counter that goes up each time an operation is pressed to keep track of 
of the first three inputs but I couldn't figure out where this code needed to go to just get the current input rather
than the current result (I.e. if someone was inputting their birthday as 12+7*1999, the month would be set to 12, but the 
day would be set to 19, and the year would be set to 14005. Eventually I figured it out.

Another challenge was figuring out how to calculate someone's age. I didn't even think to check if javascript had a 
method of getting the current date (it does) so I just had the program give a rough estimate of their age, assuming
it's 2022 that they're using the app. This would obviously be a problem if this were designed to be used in the 
future and would have to be fixed if I ever planned on using this for magic tricks in the future.

---------------------------------------------------------------------

INTERFACE

- When you first load the calculator, it will operate as a normal calculator.
You must turn on "Trick Mode" in order to use the magic trick features

- If you hover over the area directly to the left of the "AC" button, 
you'll notice that your cursor turns into a magic wand. Double click 
here to open the secret menu.

- The first box is where you can enter the number to be forced. Entering a 
number in this field will automatically enable trick mode. Hitting enter with nothing
in the box will clear the entry and disable trick mode.

- Underneath is a display that will tell you the force number if you forget or need
to see what has been set.

- Everything underneath it is the information that will be displayed
once the spectator hits equals:
	
	Their Birthday
	An estimate of their age
	Their Astrological Sign
	Their Chinese Zodiac Sign

- Information will not display if someone has entered impossible information
such as their birthday being February 31st.

- The "reset" button will clear all information in the calculator

- Hit the "X" to close the secret menu

- There is a second hidden button to the left of the "1", indicated by the same
magic wand cursor. Clicking this will toggle trick mode on and off, indicated by 
a small green circle in the upper right corner of the screen. If you see the circle, 
trick mode is on. If not, it's off. When trick mode is on, pressing equals will display 
the force number. When it's off, the calculator will operate as normal.

---------------------------------------------------------------------

INSTRUCTIONS

1. Before you start, open the menu using the first secret button. Type in a
number that you would like to force. I suggest using a larger 9-10 digit number
so that people will be unlikely to trace the calculations. I'd also suggest
using an interesting number like a phone number or the serial number on a dollar.
When you hit enter, the green indicator in the top right should turn on, indicating
that you are ready to perform. If you mistype your number, retype it in the box
and it will overwrite it. 

2. If you wish to allow your spectator to check that the calculator is legitimate,
double click the lower secret button to turn off trick mode. This will cause the
calculator to operate as normal. When you're ready to perform, secretly click this
button to re-activate trick mode.

3. Say something about how we are going to use personal information to generate something
seemingly impersonal. This is to justify why they input their birthday.

4. Turn your computer toward them so you can't see the screen and tell them to enter their
birth month as a number (i.e Jan = "1", Feb = "2", etc.)

5. Tell them to hit multiply and enter the day of the month they were born.

6. Tell them to hit multiply again and type the year they were born.
The program will deal with formatting. If they enter '99' or '1999' for their year,
the app will store it as 1999. If they were born in the early 2000s, have them type the
full year (2001 rather than just 01)

7. This is all the necessary input. From here they can enter whatever they want and when they 
hit equals, it will display the force number. I suggest not letting them use divide. The trick 
will still work but it would be suspicious if the number suddenly went from having no decimal to
another. Try to use inputs that could logically get you to a 9-10 digit number.

8. Hitting equals will display the force number and automatically turn magic mode off.
If they want to test the calculator after the first trick, it will operate as normal.

9. Once you have revealed that you predicted the number that would come out, turn the 
laptop back toward you and open the secret menu to learn their age, birthday, Astrological sign, 
and Zodiac sign. I suggest waiting before revealing any of this information though. Talk about
something else or show them a card trick. If you do it right after, they will know you somehow
gained this information from the calculator.

10. Once you are done, you can hit 'reset' in the secret menu or simply refresh
the page to clear the information and start again

