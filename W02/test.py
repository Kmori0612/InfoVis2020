from statistics import mean, median,variance,stdev

data = [100,200,300,400,500,500,600,700,800,800]

m = mean(data)
median = median(data)
variance = variance(data)
stdev = stdev(data)
print('平均: {0:.2f}'.format(m))
print('中央値: {0:.2f}'.format(median))
print('分散: {0:.2f}'.format(variance))
print('標準偏差: {0:.2f}'.format(stdev))
