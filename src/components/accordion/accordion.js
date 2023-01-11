import React, { Fragment, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./accordion.css";

const Accordionn = () => {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <div className="question_section">
        <div className="container">
          <div className="question_title">
            <h2 className="text-center">How we Treat Infertility patients?</h2>
            <p>
              Marlin has a group of best infertility specialists and
              embryologist who use cutting-edge technology to give result to
              childless couples.
            </p>
            {/* {
                            show &&  <div className="reademoretxt">
                            <strong>We provide all of the following bone marrow transplant procedures</strong>
                            <p>Allogeneic and autologous transplants are the two most common forms, depending on who provides the bone marrow or stem cells</p>
                            <strong>Autologous bone marrow transplant: </strong> <span style={{ marginBottom: "10px", display:'inline-block' }}>The patient's own bone marrow is used to harvest healthy bone marrow cells.</span><br />
                            <strong>Allogenic bone marrow transplant: </strong> <span>Bone marrow cells are obtained from a related donor. </span>
                            <div className="read_txt_list">
                                <ul>
                                    <li>- It can be matched related, in which case the donor is a sibling or other HLA-matched relative.</li>
                                    <li>- Matched Unrelated, when the donor is typically found from one of the numerous national or international registries and is not a family of the patient.</li>
                                    <li>- In a partially matched related case, the donor comes from the patient's family (haploidentical)</li>
                                </ul>
                            </div>
                            <strong  style={{ marginTop: "10px", display:'inline-block' }}>How does HLA typing work? </strong><br />
                            <p>HLA typing is just blood test that is administered to patients and potential donors to determine how closely the recipient and potential donors match each other. This makes it feasible to choose the ideal donor for an allogeneic transplant.</p>
                            <strong>How can I consult top doctors for Bone Marrow Transplant for second opinion or medical advice?</strong><br />
                            <div className="second_list">
                                <ul>
                                    <li>- Contact us by sending your information via Email, WhatsApp etc</li>
                                    <li>- Get appointment with doctors for bone marrow transplants.</li>
                                    <li>- Get in touch with the Marlin Healthcare Services' staff</li>
                                </ul>
                            </div>
                            <strong style={{ marginTop: "10px", display:'inline-block' }}>The procedure of bone marrow transplant</strong>
                            <p>The first step is the extraction of the bone marrow cells from the donor by making punctures under general anesthesia. In the second step, pre-engraftment is done in which high-dose chemo-radiotherapy is done. Here the blood stem cells are destroyed and the normal blood cells are not produced. The patient has to be kept in a clean room at this time. The third step is post-engraftment. Here the donated stem cell will start functioning. The patient can come out of critical isolation at this time.</p>
                            <strong>Bone Marrow Transplant can be done when;</strong>
                        </div>
                        } */}
          </div>
          <div className="question_inner">
            <Row>
              <Col md={6}>
                <div className="question_item">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        IVF
                      </Accordion.Header>
                      <Accordion.Body>
                        A set of intricate treatments known as in vitro fertilisation (IVF) are used to 
                        help with fertility, prevent genetic issues, and aid in child conception. In IVF, 
                        mature eggs are removed from the ovaries and fertilised in a laboratory using sperm.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                      IUI
                      </Accordion.Header>
                      <Accordion.Body>
                      A tiny catheter is used to inject sperm directly into the uterus 
                      throughout an intrauterine insemination (IUI) procedure.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                      Intracytoplasmic Sperm Injection (ICSI)
                      </Accordion.Header>
                      <Accordion.Body>
                      In the ICSI procedure, a single sperm is injected into the centre of the egg using 
                      a tiny needle called a micropipette.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                      Frozen Embryo Transfer (FET )
                      </Accordion.Header>
                      <Accordion.Body>
                      One method for preventing desynchronization is FET. Your hormones can return to normal before 
                      egg retrieval during a later cycle, increasing your chances of becoming pregnant.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>Microsurgical testicular sperm extraction (microTESE)</Accordion.Header>
                      <Accordion.Body>
                      A surgical method called microsurgical testicular sperm extraction (microTESE) is performed to 
                      remove sperm from the seminiferous tubules of a male testis.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col md={6}>
                <div className="question_item">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                      Blastocyst Culture
                      </Accordion.Header>
                      <Accordion.Body>
                      The term "blastocyst culture" refers to the embryos being grown in the lab for two 
                      more days after which they are known as blastocyst embryos.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                      <Accordion.Header>
                      Laser-assisted Hatching
                      </Accordion.Header>
                      <Accordion.Body>
                      Before the embryo is implanted inside the uterus, a fracture is artificially made in it 
                      via a process known as "laser-assisted hatching.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                      <Accordion.Header>
                      Testicular Sperm Aspiration
                      </Accordion.Header>
                      <Accordion.Body>
                      A process in which a tiny needle connected to a syringe is used to extract tissue and sperm 
                      cells from the testis. In the lab, the sperm is removed from the tissue and examined under 
                      a microscope. After that, it can either be utilised immediately to fertilise eggs or frozen 
                      for later use in treating infertility.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                      <Accordion.Header>
                      Varicocele Repair
                      </Accordion.Header>
                      <Accordion.Body>
                      A varicocele is treated surgically with a varicocelectomy. It eases testicular discomfort and may boost male fertility.
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* <Accordion.Item eventKey="10">
                      <Accordion.Header>Heart Valve Disease</Accordion.Header>
                      <Accordion.Body>
                        Your heart has four valves: the aortic, mitral,
                        pulmonary, and tricuspid valves. Any one of these valves
                        may experience a malfunction, leading to heart valve
                        disease.
                      </Accordion.Body>
                    </Accordion.Item> */}
                  </Accordion>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Accordionn;
