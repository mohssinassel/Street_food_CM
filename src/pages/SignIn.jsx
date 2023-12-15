import backgroundImage from '/images/background1.png'; // Adjust the path based on your project structure

export default function SignIn() {
    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover', // You can adjust these properties as needed
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
        }}>
            
        </div>
    );
}
