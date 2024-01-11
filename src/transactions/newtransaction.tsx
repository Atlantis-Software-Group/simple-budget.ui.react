import { ChangeEvent, useState } from "react";
import { TransactionData } from "./TransactionData";
import TransactionService from "./TransactionService";
import { InputField } from "../form/inputField";
import { InputTextArea } from "../form/inputTextArea";
import { Row } from "../layout/Row";
import { Form } from "../layout/Form";
import { Card } from "../layout/Card";
import { Label } from "../form/Label";
import { Column } from "../layout/Column";


export default function NewTransaction() {   

    const Today: Date = new Date(Date.now());
    const year: number = Today.getFullYear();
    const month: string = (Today.getMonth() + 1).toLocaleString('en-US', { minimumIntegerDigits: 2 });
    const date: string = Today.getDate().toLocaleString('en-US', { minimumIntegerDigits: 2 });
    const TodayDateString: string = `${year}-${month}-${date}`;
    
    const transactionService: TransactionService = new TransactionService();    
    const [formClasses, setFormClasses] = useState<string[]>(["row", "g-3", "needs-validation"]);
    const [formData, setFormData] = useState<TransactionData>({
        date: TodayDateString,
        name: '',
        description: '',
        amount: '',
        notes: ''
    });

    function nameInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const field = event.target;
        const { id, value } = field;

        if (value.length <= 512) {
            field.setCustomValidity('');
        }
        else {
            field.setCustomValidity("not valid");
        }

        setFormData({ ...formData, [id]: value });
    }

    function dateInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const field = event.target;
        const { id, value } = field;

        const datePieces: string[] = value.split('-');
        const newDateSelect:Date = new Date(Number(datePieces[0]), Number(datePieces[1]) - 1, Number(datePieces[2]));
        console.log(newDateSelect);

        const today: Date = new Date(Date.now());
        const nextMonth: Date = new Date(today);
        nextMonth.setMonth(today.getMonth() + 1);

        const lastMonth: Date = new Date(today);
        lastMonth.setMonth(today.getMonth() - 1);

        console.log(`Last Month: ${lastMonth}`);
        console.log(`Next Month: ${nextMonth}`);

        if ( lastMonth > newDateSelect || newDateSelect > nextMonth) {
            field.setCustomValidity("Date is invalid");
        } 
        else {
            field.setCustomValidity('');
        }

        setFormData({ ...formData, [id]: value });
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const field = event.target;
        const { id, value } = field;

        let amountValue: string = value;

        if ( value.length > 0 ) {
            if ( value.charAt(0) !== '$' ){
                amountValue = `$${value}`;
            }

            if (amountValue.length === 1 ) {
                amountValue = '';
            } else if ( amountValue.length > 1 ) {
                const amountToCheck: string = amountValue.substring(1);
                
                if ( Number(amountToCheck) === 0 ) {
                    amountValue = '';
                }
            }
        }

        setFormData({ ...formData, [id]: amountValue });
    }

    function handleTextAreaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    }

    function createNewTransaction(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;

        if (!form.checkValidity()) {
            if (!formClasses.includes("was-validated")) {
                setFormClasses([...formClasses, "was-validated"]);
            }

            return;
        }

        const data: TransactionData = {
            amount: formData["amount"].substring(1),
            date: formData["date"],
            name: formData["name"],
            description: formData["description"],
            notes: formData["notes"]
        };
        
        transactionService.SaveTransaction(data);
    }

    return (
        <div className="row justify-content-md-center">
            <div className="col-6 gx-0">
                <Card header="Create New Transaction">
                    <Form onSubmit={createNewTransaction} additionalClasses={formClasses}>
                        <Row additionalClasses={["mt-3"]}>
                            <Column>
                                <button type="submit" className="btn btn-primary float-end">Create</button>
                            </Column>
                        </Row>
                        <Row additionalClasses={["mb-3"]}>
                            <Column>
                                <Label htmlFor="name">
                                    Name
                                </Label>
                                <InputField
                                    type="text"
                                    id="name"
                                    placeholder="Kroger, Meijer, ..."
                                    ariaLabel="Name of Establishment"
                                    value={formData.name}
                                    invalidFeedback="Name cannot be more than 512 characters."
                                    onChange={nameInputChange}
                                />
                            </Column>
                            <Column>
                                <Label htmlFor="date">
                                    Date
                                </Label>
                                <InputField
                                    type="date"
                                    id="date"
                                    ariaLabel="date of transaction"
                                    value={formData.date}
                                    onChange={dateInputChange}
                                />
                            </Column>
                        </Row>
                        <Row additionalClasses={["mb-3"]}>
                            <Column>
                                <Label htmlFor="amount">
                                    Amount
                                </Label>
                                <InputField
                                    type="text"
                                    id="amount"
                                    placeholder="$0.00"
                                    ariaLabel="transaction amount"
                                    onChange={handleInputChange}
                                    value={formData.amount}
                                />
                            </Column>
                        </Row>
                        <Row additionalClasses={["mb-3"]}>
                            <Column>
                                <Label htmlFor="description">
                                    Description
                                </Label>
                                <InputTextArea
                                    id="description"
                                    inputClass={["form-control"]}
                                    placeholder="Grocery shopping"
                                    ariaLabel="description of the transaction"
                                    value={formData.description}
                                    onChange={handleTextAreaChange} />
                            </Column>
                        </Row>
                        <Row additionalClasses={["mb-3"]}>
                            <Column>
                                <Label htmlFor="notes">
                                    Notes
                                </Label>
                                <InputTextArea
                                    id="notes"
                                    inputClass={["form-control"]}
                                    placeholder="Watermelon, Apples"
                                    ariaLabel="transaction notes"
                                    value={formData.notes}
                                    onChange={handleTextAreaChange} />
                            </Column>
                        </Row>
                    </Form>
                </Card>
            </div>
        </div>
    );
}