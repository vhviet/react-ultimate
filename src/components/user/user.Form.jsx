import { Button, Input } from "antd";

const UserForm = () => {
    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                <div>
                    <span>Username</span>
                    <Input />
                </div>
                <div>
                    <span>Email</span>
                    <Input />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input />
                </div>
                <div>
                    <Button type="primary">Create user</Button>
                </div>
            </div>
        </div>
    )
}
export default UserForm;