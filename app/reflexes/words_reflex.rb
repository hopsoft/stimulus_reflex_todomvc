class WordsReflex < StimulusReflex::Reflex
  def words
    @words = element[:value]
    puts @words
  end
end
