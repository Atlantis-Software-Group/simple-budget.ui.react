import { TransactionListItem } from "../../types/TransactionListItem";
import { TableHeader } from "../../types/tableHeader";

export default function Transactions() {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    const tableHeader: TableHeader[] = [
        {
            id: 1,
            title: "#", 
            scope: "col"
        },
        {
            id: 2,
            title: "Date", 
            scope: "col"
        },
        {
            id: 3,
            title: "Name",
            scope: "col"
        },
        {
            id: 4,
            title: "Amount",
            scope: "col"
        }
    ];

    const data: TransactionListItem[] = [
        { id: 1, date: new Date(23, 12, 3), name: "Test Transaction 1", amount: 14},
        { id: 2, date: new Date(23, 12, 1), name: "Test Transaction 2", amount: 25},
        { id: 3, date: new Date(23, 12, 2), name: "Test Transaction 3", amount: 10.9},
        { id: 4, date: new Date(23, 12, 2), name: "Test Transaction 4", amount: 15.0}
    ];

    return (
        <>
            <div className="py-2 ps-0 clear-fix">
                <button type="button" className="btn btn-primary btn-sm float-end">New</button>
            </div>
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                    {
                        tableHeader.map((header: TableHeader) => { 
                            return (
                                    <th key={header.id} className={header.scope}>{header.title}</th>
                            );
                         })
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item: TransactionListItem) => {
                            return (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.date.toISOString().substring(0, 10)}</td>
                                    <td>{item.name}</td>
                                    <td>{currencyFormatter.format(item.amount)}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}