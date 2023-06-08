'use client';

export function ProfileForm({ user }: any) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image'),
    };

    if (!body.name) {
      console.log('No name entered!');
      alert('Please enter a name.');
      return;
    }

    const res = await fetch('/api/users', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      console.error(`Error: ${res.status}`);
      return;
    }

    await res.json();
  };

  return (
    <div>
      <h2>Edit your profile:</h2>
      <form onSubmit={updateUser}>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' defaultValue={user?.name ?? ''} />
        <label htmlFor='bio'>Bio</label>
        <textarea
          name='bio'
          cols={30}
          rows={10}
          defaultValue={user?.bio ?? ''}
        ></textarea>
        <label htmlFor='age'>Age</label>
        <input type='number' name='age' defaultValue={user?.age ?? 0} />
        <label htmlFor='image'>Profile Image URL</label>
        <input type='text' name='image' defaultValue={user?.image ?? ''} />

        <button type='submit'>Save</button>
      </form>
    </div>
  );
}
