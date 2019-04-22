### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card)#should be snake case
    if card.value = 1 #value is not a defined method, 1 must be a string, also needs ==
      return true
    else
      return false
    end
  end

# typo, this should be def, not dif
  dif highest_card(card1 card2)#missing comma between card1 and card2
  if card1.value > card2.value
    return card.name # name method not defined anywhere
                     # typo, should be card1 or card2
  else
    card2
  end
end
end #end not needed or may end class

def self.cards_total(cards) #wrong method name .cards_total is undefined
  total # must be = to 0
  for card in cards
    total += card.value #can use enumeration
    return "You have a total of" + total #needs interpolation
  end
end

#class not ended
```
