import {Money} from "@/models/money";

test("test money",()=>{
    const money=new Money(100,"JPY")
    expect(money.amount).toBe(100);
    expect(money.currency).toBe("JPY")
})