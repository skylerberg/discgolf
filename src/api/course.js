export function getCourses() {
    return fetch('http://127.0.0.1:5000/courses').then((response) => response.json())
}

export function addCourse(course) {
    return fetch('http://127.0.0.1:5000/courses', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(course),
    }).then((response) => response.json())
}

export function editCourse(freshCourse) {
    return fetch(`http://127.0.0.1:5000/courses/${freshCourse.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(freshCourse),
    }).then((response) => response.json())
}

export function deleteCourse(courseToDelete) {
    return fetch(`http://127.0.0.1:5000/courses/${courseToDelete.id}`, {
        method: "DELETE",
    })
}

export function getCourse(courseId) {
    return fetch(`http://127.0.0.1:5000/courses/${courseId}`).then((response) => response.json())
}

export function addHole(courseId, hole) {
    return fetch(`http://127.0.0.1:5000/courses/${courseId}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(hole),
    }).then((response) => response.json())
}

export function editHole(courseId, freshHole) {
    return fetch(`http://127.0.0.1:5000/courses/${courseId}/${freshHole.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(freshHole),
    }).then((response) => response.json())
}

export function deleteHole(courseId, holeToDelete) {
    return fetch(`http://127.0.0.1:5000/courses/${courseId}/${holeToDelete.id}`, {
        method: "DELETE",
    })
}