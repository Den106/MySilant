import * as React from "react";
import { Table } from "@mui/material";

const Complaints = (props) => {
    const {complaints} = props
    
    return (
        <div style={{ overflowX: "scroll" }}>
            <Table>
                <tbody>
                    <tr>
                        <th>№ п/п</th>
                        <th>Дата отказа</th>
                        <th>Наработка, м/час</th>
                        <th>Узел отказа</th>
                        <th>Описание отказа</th>
                        <th>Способ восстановления</th>
                        <th>Используемые запасные части</th>
                        <th>Дата восстановления</th>
                        <th>Время простоя техники</th>
                    </tr>
                    {complaints.machine.loading || !complaints.machine.success ? (
                        <tr>
                            <td>Загрузка</td>
                        </tr>
                    ) : (
                        complaints.machine.data.complaints_machine.map((value, idx) => (
                            <tr key={value.id}>
                                <td>{idx + 1}</td>
                                <td>{value.dateOfRefusal}</td>
                                <td>{value.operatingTime}</td>
                                <td>{value.nodeOfRefusal.title}</td>
                                <td>{value.descriptionOfRefusal}</td>
                                <td>{value.repairMethod.title}</td>
                                <td>{value.usedSpareParts}</td>
                                <td>{value.dateOfRepair}</td>
                                <td>{value.downtimeOfMachine}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export { Complaints };
