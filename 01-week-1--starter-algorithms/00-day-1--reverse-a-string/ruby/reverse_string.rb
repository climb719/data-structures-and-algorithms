def reverse_string(str)
  reversed = ""
  str.chars.each do |char|
    reversed = char + reversed
  end
  reversed
end


if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  #Don't forget to add your own!

  puts

  puts "Expecting: 'M'"
  puts reverse_string('M')

  puts

  puts "Expecting: '' (empty string)"
  puts reverse_string('')

end

# Please add your pseudocode to this file
# initialize an empty string (reversed) that will be the expected result I want to returh 
# iterate over each letter of the sting imputed in as the argument
# place each character in the initialized string before the previous one placed
# return reversed

# And a written explanation of your solution

# Rewrite the problem in your own words
# Write a method that takes in a string as an argument and use iteration to output the string with all the letters in reverse.
# Validate that you understand the problem
# Write your own test cases
# Pseudocode
# Code!