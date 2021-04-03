{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };


    //public
    //private
    //protected
    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level class와 연결 object 마다 만들어 지지 않음 
        private coffeeBeans: number = 0;  // instance (object) level
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        fileCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }
        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enogh coffe beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false
            }
        }
    }

    const maker = CoffeeMaker.makeMachine(32);
    maker.makeCoffee(2);


    class User {
        get fullNm(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number) {
            if (num < 0) throw Error('less then 0');
            this.internalAge = num;
        }
        constructor(private firstName: string, private lastName: string) { }
    }
    const user = new User('Steve', 'Jobs');
}