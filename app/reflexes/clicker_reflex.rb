class ClickerReflex < StimulusReflex::Reflex
  def increment
    value = Rails.cache.increment("clicks:#{session.id}")
    puts "#{session.id} INCR #{value}"
  end

  def decrement
    value = Rails.cache.decrement("clicks:#{session.id}")
    puts "#{session.id} DECR #{value}"
  end

  def api
    @api_status = :loading
    wait_for_it(:success) do
      sleep 3
      "worth the wait"
    end
  end

  def success(args)
    puts "Success! Slow API says: #{args}"
    @api_status = :ready
  end

  private

  def wait_for_it(target)
    if block_given?
      Thread.new do
        @channel.receive({
          "target" => "#{self.class}##{target}",
          "args" => [yield],
          "url" => @url,
          "xpath" => @xpath,
        })
      end
    end
  end
end
