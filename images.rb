1.upto(100) do |index|
  puts "    <img src='images/cholera_#{index % 3 + 1}.png' style='position: absolute; top: #{(rand * 250).floor + 12}px; left: #{(rand * 250).floor + 12}px; transform: rotate(#{rand.round(2)}turn);' />"
end
