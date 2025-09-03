import { Card, ListGroup, Badge, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const Notification = () => {
  const notifications = [
    {
      id: 1,
      type: "follow",
      name: "John",
      message: "sent a follow request",
      time: "9:00 AM",
      date: "Today",
      img: "https://i.pravatar.cc/40?img=11",
      action: "Accept",
    },
    {
      id: 2,
      type: "post",
      name: "John",
      message: "posted a new post",
      time: "9:00 AM",
      date: "Today",
      img: "https://i.pravatar.cc/40?img=12",
    },
    {
      id: 3,
      type: "post",
      name: "John",
      message: "posted a new post",
      time: "9:00 AM",
      date: "Yesterday",
      img: "https://i.pravatar.cc/40?img=13",
    },
  ];

  return (
    <div className="d-flex justify-content-start align-items-center vh-100 w-100 px-2">
      <Card
        className="shadow-lg border-0"
        style={{
          width: "400px",
          borderRadius: "20px",
          backgroundColor: "#ffe0cc",
        }}
      >
        {/* Header */}
        <Card.Header className="d-flex justify-content-between align-items-center border-0 bg-transparent">
          <div>
            <h5 className="mb-0 fw-bold">Notifications</h5>
            <small className="text-muted">
              Stay Updated with Your Latest Notifications
            </small>
          </div>
          <Button
            variant="light"
            size="sm"
            className="rounded-circle border"
            style={{ width: "30px", height: "30px" }}
          >
            ✕
          </Button>
        </Card.Header>

        {/* Tabs & Actions */}
        <div className="d-flex justify-content-between align-items-center px-3 pb-2">
          <div>
            <Button variant="link" className="p-0 me-3 fw-bold text-dark">
              All
            </Button>
            <Button variant="link" className="p-0 text-muted">
              Unread (12)
            </Button>
          </div>
          <Button variant="link" className="p-0 text-warning small fw-semibold">
            Mark all as read
          </Button>
        </div>

        {/* Notifications List */}
        <ListGroup variant="flush">
          {notifications.map((notif) => (
            <ListGroup.Item
              key={notif.id}
              className="d-flex align-items-center justify-content-between border-0 bg-transparent"
            >
              <div className="d-flex align-items-center">
                <img
                  src={notif.img}
                  alt="profile"
                  className="rounded-circle me-2"
                  width="40"
                  height="40"
                />
                <div>
                  <div className="fw-bold">
                    {notif.name}{" "}
                    <small className="fw-normal text-muted">
                      {notif.message}
                    </small>
                  </div>
                  <small className="text-muted">{notif.date} • {notif.time}</small>
                </div>
              </div>
              <div className="text-end">
                {notif.action && (
                  <Button variant="outline-primary" size="sm" className="rounded-pill">
                    {notif.action}
                  </Button>
                )}
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default Notification;
