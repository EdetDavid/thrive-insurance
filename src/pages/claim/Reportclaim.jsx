import React, { useState } from "react";
import { Form, Button, Image } from "react-bootstrap";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import cover from "../../assets/images/slider/covered.jpg";
import report from "../../assets/images/report-form.jpg";
import "./Reportclaim.css";

const Reportclaim = () => {
  const [insured, setInsured] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalVariant, setModalVariant] = useState("success");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("insured", insured);
    formData.append("policy_number", policyNumber);
    formData.append("email", email);
    formData.append("phone", phone);
    if (file) {
      formData.append("file", file);
    }

    try {
      setSubmitting(true);
      const response = await fetch(
        "https://thrivenig-backend.onrender.com/api/report-claim/",
        // "http://localhost:8000/api/report-claim/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setInsured("");
        setPolicyNumber("");
        setEmail("");
        setPhone("");
        setFile(null);
        setModalMessage("Your claim has been submitted successfully. You will receive a response from our team.");
        setModalVariant("success");
      } else {
        setModalMessage("Failed to submit the claim.");
        setModalVariant("danger");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setModalMessage("Failed to submit the claim.");
      setModalVariant("danger");
    } finally {
      setSubmitting(false);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container-fluid px-0 bg-light">
      <div className="header d-flex position-relative">
        <Image
          id="header-image"
          className="position-relative w-100 mx-0"
          height={450}
          src={cover}
          alt="cover"
        />
        <span
          className="display-3 font-bold red-text blue-text-shadow"
          style={styles.headerText}
        >
          Report a Claim
        </span>
      </div>

      {/* Form Section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Form onSubmit={handleSubmit} style={styles.form}>
              <Form.Group controlId="formInsured">
                <Form.Label style={styles.label}>Insured</Form.Label>
                <Form.Control
                  style={styles.input}
                  name="insured"
                  type="text"
                  placeholder="Enter insured name"
                  value={insured}
                  onChange={(e) => setInsured(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPolicyNumber" className="mt-3">
                <Form.Label style={styles.label}>Policy Number</Form.Label>
                <Form.Control
                  style={styles.input}
                  type="text"
                  name="policy-number"
                  placeholder="Enter Policy Number"
                  value={policyNumber}
                  onChange={(e) => setPolicyNumber(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label style={styles.label}>Email</Form.Label>
                <Form.Control
                  name="email"
                  style={styles.input}
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhoneNumber" className="mt-3">
                <Form.Label style={styles.label}>Phone Number</Form.Label>
                <Form.Control
                  style={styles.input}
                  name="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formFileUpload" className="mt-3">
                <Form.Label style={styles.label}>File Upload</Form.Label>
                <Form.Control
                  name="file"
                  style={styles.input}
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="mt-3"
                style={styles.button}
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit"}
              </Button>
            </Form>
          </div>

          {/* Image Section */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <Image src={report} fluid />
          </div>
        </div>
      </div>

      {/* Success/Error Modal */}
      <Modal open={showModal} onClose={handleCloseModal} center>
        <h2>{modalVariant === "success" ? "Claim Submitted" : "Error"}</h2>
        <p>{modalMessage}</p>
        <Button
          style={modalVariant === "success" ? styles.successButton : styles.dangerButton}
          variant={modalVariant}
          onClick={handleCloseModal}
        >
          Close
        </Button>
      </Modal>
    </div>
  );
};

const styles = {
  headerText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    textAlign: "center",
    color: "#ED1C24",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  label: {
    color: "#181344",
    fontWeight: "bold",
  },
  input: {
    borderColor: "#181344",
    color: "#181344",
  },
  button: {
    backgroundColor: "#ED1C24",
    borderColor: "#ED1C24",
    color: "#ffffff",
    transition: "background-color 0.3s",
  },
  successButton: {
    backgroundColor: "#28a745",
    borderColor: "#28a745",
    color: "#ffffff",
    transition: "background-color 0.3s",
  },
  dangerButton: {
    backgroundColor: "#dc3545",
    borderColor: "#dc3545",
    color: "#ffffff",
    transition: "background-color 0.3s",
  },
};

export default Reportclaim;
