import random

for i in range (1000):
    for j in range(5):
        print(str(round(random.uniform(-800,800),4)).replace('.',','), end=" ")
    print('')
