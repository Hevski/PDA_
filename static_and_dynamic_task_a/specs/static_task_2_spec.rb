require("minitest/autorun")
require("minitest/rg")
require('pry')
require_relative('../card.rb')
require_relative('../testing_task_2.rb')

class TestCardGame < MiniTest::Test

  def setup
    @card1 = Card.new('hearts', 11)
    @card2 = Card.new('spades', 10)
    @card3 = Card.new('hearts', 1)
    @cards = [@card1, @card2, @card3]
    @game = CardGame.new()
  end

def test_check_for_ace()
  assert_equal(true, @game.check_for_ace(@card3))
end

def test_highest_card()
  result = @game.highest_card(@card1, @card2)
  assert_equal(@card1, result)
end

def test_cards_total()
  assert_equal("You have a total of 22", @game.total_for_cards(@cards))
end

end
