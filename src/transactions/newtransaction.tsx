import { useState } from "react";
import { TransactionData } from "./TransactionData";
import TransactionService from "./TransactionService";


export default function NewTransaction(){
    const transactionService:TransactionService = new TransactionService();
    const [formData, setFormData] = useState<TransactionData>({
        date: '',
        name: '',
        description: '',
        amount: '',
        notes: ''
    });

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      }

    function handleTextAreaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function createNewTransaction(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log(formData);
        transactionService.SaveTransaction(formData);
    }

    return (
        <>
        <div className="card w-25 mx-auto mt-5 p-5">
            <h3>Create New Transaction</h3>
            <div className="card-body">
                <form onSubmit={createNewTransaction} className="row g-3">
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary float-end">Create</button>            
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date</label>
                        <input name="date" 
                                value={formData.date} 
                                type="date" 
                                className="form-control"
                                onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input name="name" 
                                value={formData.name} 
                                onChange={handleInputChange}
                                type="text" 
                                className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea name="description" 
                                    value={formData.description}                                     
                                    onChange={handleTextAreaChange}
                                    className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Amount</label>                        
                        <input name="amount"
                                value={formData.amount}  
                                onChange={handleInputChange}
                                type="text" 
                                className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Notes</label>
                        <textarea name="notes" 
                                    value={formData.notes}                                  
                                    onChange={handleTextAreaChange}
                                    className="form-control" />
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}