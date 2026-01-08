// The Factory Design Pattern in JavaScript is a creational pattern that provides a way to create objects without specifying the 
// exact class of object that will be created. Instead, it defines a method for creating the objects


class EmailNotification {
    message: string;
    email: string; 
  constructor(email: string, message: string) {
    this.email = email;
    this.message = message;
  }
  send() {
    console.log(`Sending Email to ${this.email} with message: ${this.message}`);
  }
}

class SMSNotification {
    phone: string;
    message: string;
  constructor(phone: string, message: string) {
    this.phone = phone;
    this.message = message;
  }
  send() {
    console.log(`Sending SMS to ${this.phone} with message: ${this.message}`);
  }
}

class PushNotification {
    deviceId: number;
    message: string;
  constructor(deviceId: number, message: string) {
    this.deviceId = deviceId;
    this.message = message;
  }
  send() {
    console.log(`Sending Push Notification to device ${this.deviceId} with message:
${this.message}`);
  }
}

class NotificationFactory {
  createNotification(type: 'email' | 'sms' | 'push', config:{email:string, phone: string, deviceId: number, message: string}) {
    switch (type) {
      case "email":
        return new EmailNotification(config.email, config.message);
      case "sms":
        return new SMSNotification(config.phone, config.message);
      case "push":
        return new PushNotification(config.deviceId, config.message);
      default:
        throw new Error("Notification type not recognized");
    }
  }
}
