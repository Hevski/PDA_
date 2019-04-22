### Testing task 2 code:
require('pry')
# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def check_for_ace(card)
    if card.value == 1
      return true
    end
  end

def highest_card(card1, card2)
  if card1.value > card2.value
    return card1
  else
    return card2
  end
end

def total_for_cards(cards)
  total = 0
  cards.each { |card| total += card.value }
    return "You have a total of " "#{total}"
  end
end
