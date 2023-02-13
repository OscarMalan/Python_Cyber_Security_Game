import RPi.GPIO as GPIO

# Controls the turning on operation for the Pi

LED_Pin = 14

GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_Pin , GPIO.OUT)
GPIO.output(LED_Pin , GPIO.HIGH)


