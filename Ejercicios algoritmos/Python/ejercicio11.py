# Escribir un programa que pida por teclado dos resistencias y calcule y presente la resistencia equivalente en paralelo (Req=(R1*R2)/(R1+R2)).

resistencia1 = int(input("Ingrese la primer resistencia: "))
resistencia2 = int(input("Ingrese la segunda resistencia: "))

paralelo = (resistencia1*resistencia2)/(resistencia1+resistencia2)

print('La resistencia equivalente en paralelo es de',paralelo)