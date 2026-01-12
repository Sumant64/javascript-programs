'''
o Strings in python are surrounded by either single quotation marks, or double quotation marks. 'hello' is the same as "hello".

o You can display a string literal with the print() function:
print('sumant')


--> Quotes Inside Quotes
    --------------------
print("It's alright")
print("He is called 'Johnny'")
print('He is called "Johnny"')

--> Multiline Strings
----------------------
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a)


--> Looping Through a String
----------------------------
for x in "banana":
  print(x)

  
--> String Length
-----------------
a = "Hello, World!"
print(len(a))


--> Check String
----------------
txt = "The best things in life are free!"
print("free" in txt)


--> if statement
----------------
txt = "The best things in life are free!"
if "free" in txt:
  print("Yes, 'free' is present.")


--> Not statement
txt = "The best things in life are free!"
print("expensive" not in txt)

--> not in statement
txt = "The best things in life are free!"
if "expensive" not in txt:
  print("No, 'expensive' is NOT present.")

'''
