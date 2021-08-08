
export const GetPortfolios = (name, description, image, github, link) => {
    const params = new FormData();
    params.append('name', name);
    params.append('description', description);
    params.append('image', image);
    params.append('github', github);
    params.append('link', link);
    return params;
}

export const GetAbout = (title, name, image, phone, birthday, city, age, degree, email, description) => {
    const params = new FormData();
    params.append('name', name);
    params.append('image', image);
    params.append('title', title);
    params.append('phone', phone);
    params.append('city', city);
    params.append('birthday', birthday);
    params.append('age', age);
    params.append('degree', degree);
    params.append('email', email);
    params.append('description', description);
    return params;
}


export const LoginData = (mobile) => {
    const params = new URLSearchParams();
    params.append('mobile', mobile);
    return params;
}

export const LogoutData = (token) => {
    const params = new URLSearchParams();
    params.append('token', token);
    return params;
}