# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

def even_or_odd(number)
    if number.even? 
        "#{number} is even"
    else
        "#{number} is odd"
    end        
end



reposts1 = 7
# Expected output: '7 is odd'
puts even_or_odd(reposts1)
reposts2 = 42
# Expected output: '42 is even'
puts even_or_odd(reposts2)
reposts3 = 221
# Expected output: '221 is odd'
puts even_or_odd(reposts3)

# Pseudo code:
# creates function even_or_odd
# if conditonal if its even
# use .even? built in method to check if its even or odd
# else condition if not even 

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

def remove_vowels(string)
    string.delete("aeiouAEIOU")
end    

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
puts remove_vowels(beatles_album1) 

beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
puts remove_vowels(beatles_album2)

beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'
puts remove_vowels(beatles_album3)

# Pseudo code:
# create function remove_vowels that takes in a string
# use .delete to remove vowels
# return output

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

def check_palindrome(string)
    if string.reverse
        "#{string} is a palindrome"
    else
        "#{string} is not a palindrome"   
    end     
end


palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
puts check_palindrome(palindrome_test_case1)

palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
puts check_palindrome(palindrome_test_case2)

palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'
puts check_palindrome(palindrome_test_case3)

# Pseudo code:

# create function check_palindrome that takes in a string
# using .reverse to compare to original string
# return the expected ouput