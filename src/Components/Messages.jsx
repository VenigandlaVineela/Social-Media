import { Card, ListGroup, Badge, Button } from "react-bootstrap";
import { FaPen } from "react-icons/fa";
import messsageimage from "../assets/messageimage.png"

const Messages = () => {
     const chats = [
          //     { id: 1, name: "John", message: "Hi How are you?", time: "9:00 AM", unread: 3, img: "messageimage" },
          { id: 2, name: "John", message: "Hi How are you?", time: "9:00 AM", unread: 3, img: "https://i.pravatar.cc/40?img=2" },
          { id: 3, name: "John", message: "Hi How are you?", time: "9:00 AM", unread: 3, img: "https://i.pravatar.cc/40?img=3" },
          { id: 4, name: "John", message: "Hi How are you?", time: "9:00 AM", unread: 3, img: "https://i.pravatar.cc/40?img=4" },
          { id: 5, name: "John", message: "Hi How are you?", time: "9:00 AM", unread: 3, img: "https://i.pravatar.cc/40?img=5" },
          { id: 6, name: "John", message: "Hi How are you?", time: "9:00 AM", unread: 3, img: "https://i.pravatar.cc/40?img=6" },
     ];

     return (
          <>
               <div
                    className="d-flex justify-content-start align-items-center vh-100 px-2 "
               // style={{
               //      background: "rgba(255, 255, 255, 0.2)",
               //      backdropFilter: "blur(15px)",
               //      WebkitBackdropFilter: "blur(15px)",  
               //      border: "1px solid rgba(255, 255, 255, 0.3)",
               //      borderRadius: "20px",
               // }}
               >
                    <Card
                         className="shadow-lg border-0"
                         style={{
                              width: "400px",
                              borderRadius: "20px",
                              backgroundColor: "#ffe0cc"
                              // border: "1px solid rgba(255, 255, 255, 0.3)",
                         }}
                    >
                         {/* Header */}
                         <Card.Header className="d-flex justify-content-between align-items-center border-0 bg-transparent">
                              <h5 className="mb-0 fw-bold">Messages</h5>
                              <Button
                                   variant="light"
                                   size="sm"
                                   className="rounded-circle border"
                                   style={{ width: "30px", height: "30px" }}
                              >
                                   ✕
                              </Button>
                         </Card.Header>

                         {/* New Message */}
                         <div className="d-flex align-items-center px-3 pb-2">
                              <FaPen className="text-warning me-2" />
                              <span className="fw-semibold">New Message</span>
                         </div>

                         {/* Chat List */}
                         <ListGroup variant="flush">
                              {chats.map((chat) => (
                                   <ListGroup.Item
                                        key={chat.id}
                                        className="d-flex align-items-center justify-content-between border  bg-transparent">
                                        <div className="d-flex align-items-center">
                                             <img
                                                  src={chat.img}
                                                  alt="profile"
                                                  className="rounded-circle me-2"
                                                  width="40"
                                                  height="40"
                                             />
                                             <div>
                                                  <div className="fw-bold">{chat.name}</div>
                                                  <small className="text-muted">{chat.message}</small>

                                             </div>

                                        </div>
                                        <div className="text-end">
                                             <small className="text-muted d-block">{chat.time}</small>
                                             <Badge bg="primary" pill>
                                                  {chat.unread}
                                             </Badge>

                                        </div>


                                   </ListGroup.Item>


                              ))}
                              
                         </ListGroup>
                    </Card>
               </div>
          </>
     );
};

export default Messages;
