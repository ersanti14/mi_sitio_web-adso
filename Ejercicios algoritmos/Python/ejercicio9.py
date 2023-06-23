# Escribe un programa que pida al usuario que introduzca los segundos, y le conteste diciéndole el número de días, horas, minutos y segundos que son.

day = 86400
hour = 3600
minute = 60

segundo = int(input("Ingrese la cantidad de segundos: "))

dia = int(segundo/day)
hora = int(segundo/hour)
minuto = int(segundo/minute) 

print('La cantidad de dias son',dia,'\n La cantidad de horas son',hora,'\n La cantidad de minutos son',minuto,'\n La cantidad de segundos son',segundo)