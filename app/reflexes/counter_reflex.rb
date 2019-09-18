class CounterReflex < StimulusReflex::Reflex
  def stopwatch
    session[:clock] = session[:clock] ? !session[:clock] : true
    goto(:tick) do
      []
    end
  end

  def tick
    if session[:clock]
      Rails.cache.increment("timer:#{session.id}")
      goto(:tick) do
        sleep 1
        []
      end
    end
  end

  private

  def goto(target)
    if block_given?
      Thread.new do
        @channel.receive({
          "target" => "#{self.class}##{target}",
          "args" => yield,
          "url" => @url,
          "xpath" => @xpath,
        })
      end
    end
  end
end
