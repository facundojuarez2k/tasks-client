/* Helper functions */

export function getPriorityStringFromNumber(priorityNumber) {
    const map = ["Baja", "Media", "Alta", "Urgente"];
    const defaultValue = "No definido";
    return getStringFromNumber(priorityNumber, map, defaultValue);
}

export function getStatusStringFromNumber(statusNumber) {
    const map = ["Pendiente", "En resolucion", "Resuelto"];
    const defaultValue = "No definido";
    return getStringFromNumber(statusNumber, map, defaultValue);
}

function getStringFromNumber(number, map, defaultValue) {
    if(!isNaN(number) && number >= 0 && number < map.length)
        return map[ number ];
    else
        return defaultValue;
}