{
    interface myProfile {
        name: string,
        age: number,
        email: string
    }

    const updateProfile = (profile: myProfile, update: Partial<myProfile>): myProfile => {
        return { ...profile, ...update }
    }

    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));
}