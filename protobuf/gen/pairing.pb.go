// Code generated by protoc-gen-go. DO NOT EDIT.
// source: pairing.proto

package tournament

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type Pairing struct {
	Id                   int32    `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Teams                []*Team  `protobuf:"bytes,2,rep,name=teams,proto3" json:"teams,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Pairing) Reset()         { *m = Pairing{} }
func (m *Pairing) String() string { return proto.CompactTextString(m) }
func (*Pairing) ProtoMessage()    {}
func (*Pairing) Descriptor() ([]byte, []int) {
	return fileDescriptor_pairing_51a4b9a8931ac8eb, []int{0}
}
func (m *Pairing) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Pairing.Unmarshal(m, b)
}
func (m *Pairing) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Pairing.Marshal(b, m, deterministic)
}
func (dst *Pairing) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Pairing.Merge(dst, src)
}
func (m *Pairing) XXX_Size() int {
	return xxx_messageInfo_Pairing.Size(m)
}
func (m *Pairing) XXX_DiscardUnknown() {
	xxx_messageInfo_Pairing.DiscardUnknown(m)
}

var xxx_messageInfo_Pairing proto.InternalMessageInfo

func (m *Pairing) GetId() int32 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Pairing) GetTeams() []*Team {
	if m != nil {
		return m.Teams
	}
	return nil
}

type Team struct {
	Participants         []*Participant `protobuf:"bytes,1,rep,name=participants,proto3" json:"participants,omitempty"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *Team) Reset()         { *m = Team{} }
func (m *Team) String() string { return proto.CompactTextString(m) }
func (*Team) ProtoMessage()    {}
func (*Team) Descriptor() ([]byte, []int) {
	return fileDescriptor_pairing_51a4b9a8931ac8eb, []int{1}
}
func (m *Team) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Team.Unmarshal(m, b)
}
func (m *Team) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Team.Marshal(b, m, deterministic)
}
func (dst *Team) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Team.Merge(dst, src)
}
func (m *Team) XXX_Size() int {
	return xxx_messageInfo_Team.Size(m)
}
func (m *Team) XXX_DiscardUnknown() {
	xxx_messageInfo_Team.DiscardUnknown(m)
}

var xxx_messageInfo_Team proto.InternalMessageInfo

func (m *Team) GetParticipants() []*Participant {
	if m != nil {
		return m.Participants
	}
	return nil
}

func init() {
	proto.RegisterType((*Pairing)(nil), "tournament.Pairing")
	proto.RegisterType((*Team)(nil), "tournament.Team")
}

func init() { proto.RegisterFile("pairing.proto", fileDescriptor_pairing_51a4b9a8931ac8eb) }

var fileDescriptor_pairing_51a4b9a8931ac8eb = []byte{
	// 148 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xe2, 0x2d, 0x48, 0xcc, 0x2c,
	0xca, 0xcc, 0x4b, 0xd7, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0xe2, 0x2a, 0xc9, 0x2f, 0x2d, 0xca,
	0x4b, 0xcc, 0x4d, 0xcd, 0x2b, 0x91, 0x12, 0x2c, 0x48, 0x2c, 0x2a, 0xc9, 0x4c, 0xce, 0x2c, 0x48,
	0xcc, 0x2b, 0x81, 0x48, 0x2b, 0x39, 0x72, 0xb1, 0x07, 0x40, 0xd4, 0x0b, 0xf1, 0x71, 0x31, 0x65,
	0xa6, 0x48, 0x30, 0x2a, 0x30, 0x6a, 0xb0, 0x06, 0x31, 0x65, 0xa6, 0x08, 0xa9, 0x71, 0xb1, 0x96,
	0xa4, 0x26, 0xe6, 0x16, 0x4b, 0x30, 0x29, 0x30, 0x6b, 0x70, 0x1b, 0x09, 0xe8, 0x21, 0x4c, 0xd2,
	0x0b, 0x49, 0x4d, 0xcc, 0x0d, 0x82, 0x48, 0x2b, 0x39, 0x73, 0xb1, 0x80, 0xb8, 0x42, 0xd6, 0x5c,
	0x3c, 0x48, 0xe6, 0x17, 0x4b, 0x30, 0x82, 0xb5, 0x89, 0x23, 0x6b, 0x0b, 0x40, 0xc8, 0x07, 0xa1,
	0x28, 0x4e, 0x62, 0x03, 0x3b, 0xc7, 0x18, 0x10, 0x00, 0x00, 0xff, 0xff, 0x29, 0xca, 0x0f, 0x69,
	0xbe, 0x00, 0x00, 0x00,
}
