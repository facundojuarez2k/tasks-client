/* Helper functions */

export const priorityOptions = [
    { label: "Baja", name: "low", value: 0 },
    { label: "Media", name: "medium", value: 1 },
    { label: "Alta", name: "high", value: 2 },
    { label: "Urgente", name: "urgent", value: 3 }
];

export const statusOptions = [
    { label: "Pendiente", name: "pending", value: 0 },
    { label: "En resolución", name: "inprocess", value: 1 },
    { label: "Resuelto", name: "solved", value: 2 }
];

export function formatTasksData(tasks) {
    return tasks.map(function(task) {
        return Object.assign({}, task, {
            priority: formatPriority(task.priority),
            status: formatStatus(task.status)
        })
    });
}

function formatPriority(priority) {
    const index = priorityOptions.findIndex((item) => item.value === parseInt(priority));
    if( index >= 0 )
        return priorityOptions[index].label;
    else
        return "No definido"
}

function formatStatus(status) {
    const index = statusOptions.findIndex((item) => item.value === parseInt(status));
    if( index >= 0 )
        return statusOptions[index].label;
    else
        return "No definido"
}